import React from "react";
import { FlatList, View } from "react-native";
import styled from "@emotion/native";

const Container = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  padding-top: 6px;
  border: 1px solid #f1eef7;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? "#262626" : "#dfdfdf")};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

type CarouselProps = {
  gap: number;
  RenderItem: ({ page, item }: { page: number; item: any }) => JSX.Element;
  pageWidth: number;
  data: any[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
};

const Carousel = ({
  gap,
  RenderItem,
  pageWidth,
  data,
  page,
  setPage,
  offset,
}: CarouselProps) => {
  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap)
    );
    setPage(newPage);
  };

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: (offset + gap) / 2,
        }}
        onScroll={onScroll}
        decelerationRate="fast"
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        pagingEnabled
        horizontal
        keyExtractor={(item) => String(item.id)}
        data={data}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: gap / 2 }}>
            <RenderItem page={page} item={item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: data.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default Carousel;
