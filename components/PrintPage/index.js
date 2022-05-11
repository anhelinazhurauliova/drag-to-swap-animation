import Actions from "../actions";
import DraggablePhoto from "../DraggablePhoto";

import {
  Wrapper,
  PrintWrapper,
  Header,
  Title,
  PageLayout,
  PhotoContainer,
} from "./styles";

export default function PrintPage({ data }) {
  return (
    <Wrapper>
      {Object.values(data).map((entry, i) => (
        <PrintWrapper key={i}>
          <Header>
            <Title>{entry.title}</Title>
            <Actions />
          </Header>
          <PageLayout>
            {entry.images.map((image, index) => (
              <PhotoContainer key={entry.title + index}>
                <DraggablePhoto src={image} />
              </PhotoContainer>
            ))}
          </PageLayout>
        </PrintWrapper>
      ))}
    </Wrapper>
  );
}
