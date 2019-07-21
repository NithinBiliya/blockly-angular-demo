Blockly.defineBlocksWithJsonArray([
  {
    type: 'begin',
    message0: 'Begin',
    nextStatement: 'any',
    colour: 180,
    tooltip: 'begin statement'
  },
  {
    type: 'move',
    message0: 'Move by %1 steps',
    args0: [
      {
        type: 'field_number',
        name: 'steps',
        value: 0
      }
    ],
    previousStatement: 'any',
    nextStatement: 'any',
    colour: 240,
    tooltip: 'steps to move'
  },
  {
    type: 'end',
    message0: 'End %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'end_types',
        options: [['Now', 'now'], ['Later', 'later']]
      }
    ],
    previousStatement: 'any',
    colour: 60,
    tooltip: 'end type'
  }
]);
