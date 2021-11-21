// @ts-nocheck
import {
  Wrapper,
  Title,
  InnerWrapper,
  HeaderPart,
  ProductCountLabel,
  ProductCount,
  SalesCountLabel,
  SalesCount,
  TotalAmountLabel,
  TotalAmount,
  FooterPartLeft,
  FooterPartRight,
  WrapperHeader,
  WrapperFooter,
} from "./sellerdashboard.styles";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { sellerLineGraph, sellerPieGraph } from "./sellerdashboard.chartdata";
export default function DashboardUI(props) {
  return (
    <>
      <Wrapper>
        <Title>판매자 대시보드</Title>
        <InnerWrapper>
          <WrapperHeader>
            <HeaderPart>
              <ProductCountLabel>총 상품 개수</ProductCountLabel>
              <ProductCount>2,529 개</ProductCount>
            </HeaderPart>
            <HeaderPart>
              <SalesCountLabel>판매 상품 개수</SalesCountLabel>
              <SalesCount>2,034 개</SalesCount>
            </HeaderPart>
            <HeaderPart>
              <TotalAmountLabel>총 수익</TotalAmountLabel>
              <TotalAmount>133,536,000 원</TotalAmount>
            </HeaderPart>
          </WrapperHeader>
          <WrapperFooter>
            <FooterPartLeft>
              <ResponsiveLine
                data={sellerLineGraph}
                colors={{ scheme: "set2" }}
                margin={{ top: 50, right: 160, bottom: 50, left: 80 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: false,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "기간 ( 월 )",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "금액 ( 천 원 )",
                  legendOffset: -60,
                  legendPosition: "middle",
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </FooterPartLeft>
            <FooterPartRight>
              <ResponsivePie
                data={sellerPieGraph}
                colors={{ scheme: "paired" }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "오일",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "잠옷",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "이불",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "암막커튼",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "수면용품",
                    },
                    id: "dots",
                  },
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 50,
                    itemsSpacing: 0,
                    itemWidth: 70,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 12,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </FooterPartRight>
          </WrapperFooter>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
