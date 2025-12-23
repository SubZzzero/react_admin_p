import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'
import { mockLineData as data } from '../data/mockDataTeam'
import { themeTokens } from '../theme'

const LineChart = () => {
    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}

            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
            }}

            axisBottom={{
                // legend: 'transportation',
                legendOffset: 36,
            }}

            axisLeft={{
                legend: 'count',
                legendOffset: -40,
            }}

            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}

            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 22,
                    symbolShape: 'circle',
                },
            ]}

            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
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
                    legend: {
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
                        background: '#000',
                        color: '#f6d32d',
                        fontSize: 12,
                        borderRadius: 4,
                        boxShadow: '0 3px 6px rgba(0,0,0,0.4)',
                    },
                },
            }}
        />
    )
}

export default LineChart
