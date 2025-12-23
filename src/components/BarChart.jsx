
import { ResponsiveBar } from '@nivo/bar'
import { mockBarData as data } from "../data/mockDataTeam";
import { themeTokens } from "../theme";
import { useTheme } from "@mui/material";

const BarChart = () => {

    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)

    return (
        <ResponsiveBar
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                tooltip: {
                    container: {
                        background: '#000000',
                        color: '#f6d32d',
                        fontSize: 12,
                        borderRadius: 4,
                        boxShadow: '0 3px 6px rgba(0,0,0,0.4)',
                    },
                },
            }}
            data={data}
            keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
            indexBy="country"
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 120,
                    itemsSpacing: 3,
                    itemWidth: 100,
                    itemHeight: 16
                }
            ]}
            axisBottom={{ legend: '', legendOffset: 32 }}
            axisLeft={{ legend: 'food', legendOffset: -40 }}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        />
    )
}


export default BarChart;