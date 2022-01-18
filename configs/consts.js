export const searchConfig = {
  prefecture: {
    id: 1,
    title: '都道府県',
    selector: [
      {
        id: 1,
        name: '関東',
        list: [
          { id: 1, categoryId: 1, name: '群馬県' },
          { id: 2, categoryId: 1, name: '栃木県' },
          { id: 3, categoryId: 1, name: '茨城県' },
        ],
      },
      {
        id: 2,
        name: '北海道',
        list: [
          { id: 4, categoryId: 2, name: '北海道' },
        ],
      },
      {
        id: 3,
        name: '東北',
        list: [
          { id: 5, categoryId: 3, name: '青森県' },
        ],
      },
    ],
  },
  employment: {
    id: 2,
    title: '雇用形態',
    selector: [
      {
        id: 1,
        name: '雇用形態',
        list: [
          { id: 1, categoryId: 1, name: '正社員' },
        ],
      }
    ],
  },
  condition: {
    id: 3,
    title: 'こだわり条件',
    selector: [
      {
        id: 1,
        name: '人気の条件',
        list: [
          { id: 1, categoryId: 1, name: '介護福祉士' },
          { id: 2, categoryId: 1, name: '通所介護・デイサービス' },
        ],
      },
      {
        id: 2,
        name: '福利厚生',
        list: [
          { id: 3, categoryId: 2, name: '社会保険完備' },
          { id: 4, categoryId: 2, name: '交通費支給' },
        ],
      },
      {
        id: 3,
        name: '資格',
        list: [
          { id: 5, categoryId: 3, name: '無資格可' },
          { id: 6, categoryId: 3, name: '介護職員初任者研修（旧ヘルパー2級）以上' },
        ],
      }
    ],
  },
}

export const selector = {
  // 都道府県
  prefCategory: [
    {
      id: 1,
      name: '関東',
      list: [
        { id: 1, categoryId: 1, name: '群馬県' },
        { id: 2, categoryId: 1, name: '栃木県' },
        { id: 3, categoryId: 1, name: '茨城県' },
      ],
    },
    {
      id: 2,
      name: '北海道',
      list: [
        { id: 4, categoryId: 2, name: '北海道' },
      ],
    },
    {
      id: 3,
      name: '東北',
      list: [],
    },
  ],

  // 雇用形態
  employmentCategory: [
    {
      id: 1,
      name: '雇用形態',
      list: [
        { id: 1, categoryId: 1, name: '正社員' },
      ],
    }
  ],

  // こだわり条件
  conditionCategory: [
    {
      id: 1,
      name: '人気の条件',
      list: [
        { id: 1, categoryId: 1, name: '介護福祉士' },
        { id: 2, categoryId: 1, name: '通所介護・デイサービス' },
      ],
    },
    {
      id: 2,
      name: '福利厚生',
      list: [
        { id: 3, categoryId: 2, name: '社会保険完備' },
        { id: 4, categoryId: 2, name: '交通費支給' },
      ],
    },
    {
      id: 3,
      name: '資格',
      list: [
        { id: 5, categoryId: 3, name: '無資格可' },
        { id: 6, categoryId: 3, name: '介護職員初任者研修（旧ヘルパー2級）以上' },
      ],
    }
  ]
}
