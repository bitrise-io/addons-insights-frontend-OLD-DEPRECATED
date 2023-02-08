import * as React from 'react';
import {
  PlacementManager,
  PlacementReference,
  Placement,
  Icon,
  DropdownMenu,
  DropdownMenuItem,
  Flex,
  Text,
  Button,
} from '@bitrise/bitkit';

type Props = {
  options: string[];
  onSelect: any;
  selected: string | undefined;
  label: string;
};

const DropdownFilter = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(props.selected);

  const onSelect = (opt: string) => {
    setSelected(opt);
    props.onSelect(opt);
  };

  return (
    <PlacementManager>
      <PlacementReference>
        {({ ref }) => (
          <React.Fragment>
            <Text key={selected} weight="bold" size="x3" color="grape-4">
              {props.label}
            </Text>
            <Button innerRef={ref} level="secondary" onClick={() => setOpen(true)} width="20rem">
              <Flex alignChildrenHorizontal={'start'} grow={'x1'} direction={'horizontal'}>
                <Text key={selected} weight="medium" size="x3" color="grape-4">
                  {selected === '' ? 'Choose ...' : selected}
                </Text>
              </Flex>
              <Icon name="DropdownArrows" />
            </Button>
          </React.Fragment>
        )}
      </PlacementReference>
      <Placement onClose={() => setOpen(false)} visible={isOpen}>
        {() => (
          <DropdownMenu>
            {props.options.map((opt) => (
              <DropdownMenuItem
                key={opt}
                onClick={() => onSelect(opt)}
                paddingHorizontal="x0"
                selected={opt === selected}
              >
                {opt}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        )}
      </Placement>
    </PlacementManager>
  );
};

export default DropdownFilter;
