import { Flex, Text } from '@bitrise/bitkit';
import { Viz, VizSVG } from '@bitrise/bitviz';
import { VizSVGAxisX } from '@bitrise/bitviz/lib/cjs/VizSVGAxisX';
import { VizSVGAxisY } from '@bitrise/bitviz/lib/cjs/VizSVGAxisY';
import { VizSVGGridLinesAxisX } from '@bitrise/bitviz/lib/cjs/VizSVGGridLinesAxisX';
import { VizSVGGridLinesAxisY } from '@bitrise/bitviz/lib/cjs/VizSVGGridLinesAxisY';
import { VizSVGRects } from '@bitrise/bitviz/lib/cjs/VizSVGRects';
import * as React from 'react';

type Props = {
  series: any;
  xDomain: number[];
  yDomain: number[];
};

const barColor = (status: string): string => {
  switch (status) {
    case '1':
      return 'green';
    case '2':
      return 'red';
    case '3':
      return 'yellow';
    default:
      return '';
  }
};

const BuildDuration = (props: Props) => {
  return (
    <Viz
      height={400}
      paddingTop={90}
      paddingBottom={20}
      xDomain={props.xDomain}
      xDomainPaddingInner={0.05}
      xDomainPaddingOuter={0.1}
      xDomainScale="band"
      yDomain={props.yDomain}
    >
      <VizSVG>
        {Object.entries(props.series).map(([status, builds], idx) => (
          <VizSVGRects key={idx} fill={barColor(status)} series={builds} />
        ))}

        <VizSVGAxisY animate fill="#ACACAC" stroke="#CCCCCC" />
      </VizSVG>
    </Viz>
  );
};

export default BuildDuration;
