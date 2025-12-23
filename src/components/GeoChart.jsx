import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from '@mui/material'
import { geoFeatures } from '../data/mockGeoFeatures'
import { mockGeographyData as data } from '../data/mockDataTeam'
import { themeTokens } from '../theme'

const GeoChart = () => {
    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)

    return (
        <ResponsiveChoropleth
            data={data}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            labelTextColor={colors.grey[100]}
            valueFormat=".2s"
            enableGraticule={true}
            graticuleLineColor={colors.grey[300]}
            borderWidth={0.5}
            borderColor={colors.grey[800]}
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                },
            ]}
            theme={{
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

export default GeoChart
