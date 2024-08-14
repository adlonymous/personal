import "@dialectlabs/blinks/index.css";
import { useState, useEffect } from "react";
import { Action, Blink, ActionsRegistry } from "@dialectlabs/blinks";
import { useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";

// needs to be wrapped with <WalletProvider /> and <WalletModalProvider />
const BlinkComp = () => {
  const [localAction, setLocalAction] = useState<Action | null>(null);
  const actionApiUrl = "https://blinkeditor.com/api/actions/4e6caca595";
  const { adapter } = useActionSolanaWalletAdapter("https://api.mainnet-beta.solana.com");
  const { action, isLoading } = useAction({
    url: actionApiUrl,
    adapter,
  });

  return action ? <Blink action={action} websiteText={new URL(actionApiUrl).hostname} /> : null;
};
