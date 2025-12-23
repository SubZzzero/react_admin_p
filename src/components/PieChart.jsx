import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material'
import { mockPieData as data } from '../data/mockDataTeam'
import { themeTokens } from '../theme'

const PieChart = () => {
    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)

    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={colors.greenAccent[700]}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={colors.grey[100]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    symbolShape: 'circle',
                    textColor: colors.grey[100],
                },
            ]}
            theme={{
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
                    },
                },
            }}
        />
    )
}

export default PieChart
