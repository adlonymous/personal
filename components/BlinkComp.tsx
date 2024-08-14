import "@dialectlabs/blinks/index.css";
import { useState, useEffect, useMemo } from "react";
import { Action, Blink, ActionsRegistry, type ActionAdapter } from "@dialectlabs/blinks";
import { useAction, useActionsRegistryInterval } from "@dialectlabs/blinks/hooks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";

// needs to be wrapped with <WalletProvider /> and <WalletModalProvider />
const BlinkComp = () => {
  const { isRegistryLoaded } = useActionsRegistryInterval();
  const { adapter } = useActionSolanaWalletAdapter("https://api.mainnet-beta.solana.com");

  return isRegistryLoaded ? (
    <ManyActions adapter={adapter} />
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const ManyActions = ({ adapter }: { adapter: ActionAdapter }) => {
  const apiUrls = useMemo(
    () => ["https://jup.ag/swap/USDC-dainSOL", "https://www.tensor.trade/trade/smb_gen3"],
    []
  );
  const [actions, setActions] = useState<Action[]>([]);

  useEffect(() => {
    const fetchActions = async () => {
      const promises = apiUrls.map((url) => Action.fetch(url).catch(() => null));
      const actions = await Promise.all(promises);

      setActions(actions.filter(Boolean) as Action[]);
    };

    fetchActions();
  }, [apiUrls]);

  // we need to update the adapter every time, since it's dependent on wallet and walletModal states
  useEffect(() => {
    actions.forEach((action) => action.setAdapter(adapter));
  }, [actions, adapter]);

  return actions.map((action) => (
    <div key={action.url} className="flex gap-2">
      <Blink action={action} websiteText={new URL(action.url).hostname} />
    </div>
  ));
};

export default BlinkComp;
