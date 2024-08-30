import "@dialectlabs/blinks/index.css";
import { useState, useEffect, useMemo } from "react";
import { Action, Blink, type ActionAdapter } from "@dialectlabs/blinks";
import { useActionsRegistryInterval } from "@dialectlabs/blinks/hooks";
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
    () => [
      "https://squads-actions-poc.vercel.app/api/actions/donate?squad=3MyUSvyqpkJ8dYcYyoAbakbcf7G6y1fCrs3Yosnk9VhS&mint=USDC",
      "https://squads-actions-poc.vercel.app/api/actions/donate?squad=3MyUSvyqpkJ8dYcYyoAbakbcf7G6y1fCrs3Yosnk9VhS&mint=DRIFT",
    ],
    []
  );
  const [actions, setActions] = useState<Action[]>([]);

  useEffect(() => {
    const fetchActions = async () => {
      const promises = apiUrls.map((url) => Action.fetch(url).catch(() => null));
      console.log(promises);
      const actions = await Promise.all(promises);
      console.log(actions);
      setActions(actions.filter(Boolean) as Action[]);
    };

    fetchActions();
  }, [apiUrls]);

  useEffect(() => {
    actions.forEach((action) => action.setAdapter(adapter));
  }, [actions, adapter]);

  return (
    <div className="flex md:flex-row flex-col gap-8 md:gap-auto py-8 w-96 md:w-auto">
      {actions.map((action) => (
        <div key={action.url} className="flex flex-col gap-2 md:w-96 ">
          <Blink action={action} websiteText={new URL(action.url).hostname} stylePreset="x-dark" />
        </div>
      ))}
    </div>
  );
};

export default BlinkComp;
