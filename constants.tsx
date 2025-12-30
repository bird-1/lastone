
import { Category, KnowledgePoint } from './types';

export const KNOWLEDGE_DATABASE: KnowledgePoint[] = [
  // 数与代数
  {
    id: 'na-1',
    category: Category.NUMBER_ALGEBRA,
    title: '升与毫升的换算与估计',
    description: '理解1升=1000毫升，能根据实际生活物品估计容量（如可乐瓶、勺子）。',
    difficulty: 2,
    sourceQuestion: '试卷一第1、3、9题',
    pitfall: '容易混淆毫升与克的关系，或在多步计算中忘记单位换算。'
  },
  {
    id: 'na-2',
    category: Category.NUMBER_ALGEBRA,
    title: '三位数除以两位数',
    description: '熟练掌握试商方法（“四舍”或“五入”），理解商不变的规律。',
    difficulty: 4,
    sourceQuestion: '试卷一第4、5、8题',
    pitfall: '商不变规律中，被除数和除数同时缩小，商不变但余数也要缩小。'
  },
  {
    id: 'na-3',
    category: Category.NUMBER_ALGEBRA,
    title: '周期现象及其规律',
    description: '通过除法余数判断周期中的位置，计算总数。',
    difficulty: 3,
    sourceQuestion: '试卷一第7、13、14题（如干支纪年）',
    pitfall: '找不准周期的起点和终点，或者在计算总数时忽略余数代表的部分。'
  },
  // 图形与几何
  {
    id: 'gs-1',
    category: Category.GEOMETRY_SPACE,
    title: '观察物体（三视图）',
    description: '能辨认从前面、右面、上面看到的形状，并能根据视图摆放小正方体。',
    difficulty: 3,
    sourceQuestion: '试卷二第1、2、3、4题',
    pitfall: '容易忽略隐藏的小正方体，计算“最少”和“最多”需要几个时易错。'
  },
  {
    id: 'gs-2',
    category: Category.GEOMETRY_SPACE,
    title: '角的认识与度量',
    description: '使用量角器，认识锐角、钝角、直角、平角、周角，计算组合角。',
    difficulty: 4,
    sourceQuestion: '试卷四第5、6、16题',
    pitfall: '三角尺组合角的计算，以及纸张折叠后角度变化的倍数关系。'
  },
  // 统计与概率
  {
    id: 'sp-1',
    category: Category.STATISTICS_PROBABILITY,
    title: '平均数的计算与分析',
    description: '理解平均数的代表性，掌握数据变化对平均数的影响。',
    difficulty: 3,
    sourceQuestion: '试卷二第5、8、9、10、11题',
    pitfall: '数据中某一项改变，总和改变，从而影响平均数；计算时容易漏加某项。'
  },
  {
    id: 'sp-2',
    category: Category.STATISTICS_PROBABILITY,
    title: '条形统计图与分段整理',
    description: '绘制条形统计图，对原始数据进行分段分类整理。',
    difficulty: 3,
    sourceQuestion: '试卷二第6、12题',
    pitfall: '数数时漏掉数据；统计图刻度单位（一格代表几）看错。'
  },
  {
    id: 'sp-3',
    category: Category.STATISTICS_PROBABILITY,
    title: '可能性（概率初步）',
    description: '判断事件发生的确定性与不确定性，判断游戏规则是否公平。',
    difficulty: 2,
    sourceQuestion: '试卷三第1、2、3、8、9题',
    pitfall: '可能性大小的定量分析，如“摸出红球的可能性最小”意味着红球数量最少但不为0。'
  },
  // 综合运用
  {
    id: 'cp-1',
    category: Category.COMPREHENSIVE_PRACTICE,
    title: '解决问题的策略（优化与逻辑）',
    description: '租车租船、高铁票价分段计算、购物优惠对比。',
    difficulty: 5,
    sourceQuestion: '试卷四第9、11、14题',
    pitfall: '忽略边界条件（如不够50个不能按低价计算），或者是多步计算中逻辑断层。'
  }
];
