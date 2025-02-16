const LastiEbatMenuLabels=["Option1", "option2","Option3"]

const NavMenuItems = [
    {
      key: 'sub1',
      label: 'Navigation One',
      children: 
        LastiEbatMenuLabels.map((label,index)=>({
          key: index,
          label: label 
        }))},
    {
      key: 'sub2',
      label: 'Navigation Two',
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '7',
              label: 'Option 7',
            },
            {
              key: '8',
              label: 'Option 8',
            },
          ],
        },
      ],
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
  ];

  export  {NavMenuItems}