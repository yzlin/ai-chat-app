import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface ProviderProps extends React.PropsWithChildren {}

const providers = [
  SafeAreaProvider,
  (props: ProviderProps) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {props.children}
    </GestureHandlerRootView>
  ),
  (props: ProviderProps) => (
    <KeyboardProvider>{props.children}</KeyboardProvider>
  ),
];

interface ComposeProvidersProps extends React.PropsWithChildren {
  providers: React.ComponentType<ProviderProps>[];
}

function ComposeProviders({ providers, children }: ComposeProvidersProps) {
  return providers.reduceRight(
    (acc, Provider) => (
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <Provider>{acc}</Provider>
    ),
    children,
  );
}

export function Providers(props: ProviderProps) {
  return <ComposeProviders providers={providers} {...props} />;
}
