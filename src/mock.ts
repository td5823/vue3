export const treeData: any = [
  {
    id: '1',
    name: 'Root',
    type: 'folder',
    children: [
      {
        id: '11',
        name: 'Folder 1',
        type: 'folder',
        children: [
          {
            id: '111',
            name: 'Subfolder 1',
            type: 'folder',
            children: [
              {
                id: '1111',
                name: 'File 1',
                type: 'file',
              },
              {
                id: '1112',
                name: 'File 2',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        id: '12',
        name: 'Folder 2',
        type: 'folder',
        children: [
          {
            name: 'File 3',
            type: 'file',
          },
        ],
      },
      {
        id: '13',
        name: 'File 4',
        type: 'file',
      },
    ],
  },
]
