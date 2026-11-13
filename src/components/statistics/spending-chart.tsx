import { useState } from 'react';
import { Text, View } from 'react-native';

import { ChartTooltip } from '@/components/statistics/chart-tooltip';
import type { ChartPoint } from '@/constants/data';

const CHART_HEIGHT = 148;
const CHART_COLOR = '#438883';
const FILL_COLOR = 'rgba(67, 136, 131, 0.16)';

type SpendingChartProps = {
  points: ChartPoint[];
  highlightLabel: string;
};

function sampleY(coords: { x: number; y: number }[], x: number) {
  let index = 0;
  while (index < coords.length - 2 && x > coords[index + 1].x) {
    index += 1;
  }

  const start = coords[index];
  const end = coords[index + 1];
  const progress = (x - start.x) / (end.x - start.x || 1);
  const eased = progress * progress * (3 - 2 * progress);
  return start.y + (end.y - start.y) * eased;
}

export function SpendingChart({ points, highlightLabel }: SpendingChartProps) {
  const [width, setWidth] = useState(0);
  const max = Math.max(...points.map((point) => point.value));
  const min = Math.min(...points.map((point) => point.value)) * 0.72;
  const coords =
    width === 0
      ? []
      : points.map((point, index) => ({
          ...point,
          x: (index / (points.length - 1)) * (width - 12) + 6,
          y: CHART_HEIGHT - ((point.value - min) / (max - min)) * (CHART_HEIGHT - 16) - 8,
        }));

  const samples = coords.length > 1 ? Math.floor(coords[coords.length - 1].x) : 0;
  const columns = Array.from({ length: samples }, (_, index) => ({
    x: index,
    y: sampleY(coords, index),
  }));
  const highlight = coords.find((point) => point.label === highlightLabel);

  return (
    <View onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
      <View style={{ height: CHART_HEIGHT }}>
        {columns.map((column) => (
          <View
            key={column.x}
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: column.x,
              top: column.y,
              width: 1.4,
              height: Math.max(CHART_HEIGHT - column.y, 0),
              backgroundColor: FILL_COLOR,
            }}
          />
        ))}
        {columns.map((column) => (
          <View
            key={`stroke-${column.x}`}
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: column.x,
              top: column.y - 1.5,
              width: 2,
              height: 3,
              borderRadius: 1,
              backgroundColor: CHART_COLOR,
            }}
          />
        ))}
        {highlight
          ? Array.from({ length: Math.floor((CHART_HEIGHT - highlight.y) / 6) }, (_, index) => (
              <View
                key={`dash-${index}`}
                pointerEvents="none"
                style={{
                  position: 'absolute',
                  left: highlight.x,
                  top: highlight.y + index * 6,
                  width: 1.5,
                  height: 3,
                  backgroundColor: CHART_COLOR,
                  opacity: 0.45,
                }}
              />
            ))
          : null}
        {highlight ? (
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: highlight.x - 5,
              top: highlight.y - 5,
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: CHART_COLOR,
              borderWidth: 2,
              borderColor: '#FFFFFF',
            }}
          />
        ) : null}
        {highlight ? (
          <View
            pointerEvents="none"
            style={{ position: 'absolute', left: highlight.x - 26, top: Math.max(highlight.y - 34, 0) }}
          >
            <ChartTooltip value={`$${highlight.value.toLocaleString('en-US')}`} />
          </View>
        ) : null}
      </View>
      <View className="mt-3 flex-row justify-between">
        {points.map((point) => (
          <Text
            key={point.label}
            className={
              point.label === highlightLabel
                ? 'font-inter-semibold text-caption text-heading'
                : 'font-inter text-caption text-secondary'
            }
          >
            {point.label}
          </Text>
        ))}
      </View>
    </View>
  );
}
