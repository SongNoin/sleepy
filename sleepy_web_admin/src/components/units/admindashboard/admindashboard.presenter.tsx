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
  FooterPart,
  WrapperHeader,
  GraphTitle,
  WrapperFooter,
} from "./admindashboard.styles";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { AdminBarGraph, AdminCalendarGraph } from "./admindashboard.chartdata";
export default function AdminDashboardUI(props) {
  return (
    <>
      <Wrapper>
        <Title>관리자 대쉬보드</Title>
        <InnerWrapper>
          <WrapperHeader>
            <HeaderPart>
              <ProductCountLabel>등록된 판매업체</ProductCountLabel>
              <ProductCount>912 개</ProductCount>
            </HeaderPart>
            <HeaderPart>
              <SalesCountLabel>가입 회원</SalesCountLabel>
              <SalesCount>132,795 명</SalesCount>
            </HeaderPart>
            <HeaderPart>
              <TotalAmountLabel>오늘의 거래 금액</TotalAmountLabel>
              <TotalAmount>134,630,435 원</TotalAmount>
            </HeaderPart>
          </WrapperHeader>
          <WrapperFooter>
            <FooterPart>
              <GraphTitle>오늘 상품 현황 ( 개 )</GraphTitle>
              <ResponsiveBar
                data={AdminBarGraph}
                keys={["판매된 상품", "신규 등록 상품"]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "set2" }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[]}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "카테고리",
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "수량 (개)",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) {
                  return (
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue
                  );
                }}
              />
            </FooterPart>
            <FooterPart>
              <GraphTitle>일별 신규 회원수 ( 명 )</GraphTitle>
              <ResponsiveTimeRange
                data={AdminCalendarGraph}
                from="2021-07-01"
                to="2021-11-18"
                emptyColor="#eeeeee"
                colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
                margin={{ top: 120, right: 40, bottom: 100, left: 40 }}
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: "right-to-left",
                    translateX: -30,
                    translateY: -200,
                    symbolSize: 20,
                  },
                ]}
              />
            </FooterPart>
          </WrapperFooter>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
