import { BottomNavigation, Container } from "./components";
import { FlashCardsScreen } from "./modules/flash-cards";

export function App(): React.ReactElement {
  return (
    <Container>
      <FlashCardsScreen />
      <BottomNavigation />
    </Container>
  );
}
