import {ImageRequireSource} from 'react-native';

export interface PayoutReason {
  id: string;
  name: string;
  icon: ImageRequireSource;
}

const PayoutReasons: PayoutReason[] = [
  {id: 'REFUEL', name: '加油', icon: require('@src/images/payout/REFUEL.png')},
  {
    id: 'CAR_WASH',
    name: '洗车',
    icon: require('@src/images/payout/CAR_WASH.png'),
  },
  {
    id: 'PARKING',
    name: '停车',
    icon: require('@src/images/payout/PARKING.png'),
  },
  {id: 'TOLL', name: '过路费', icon: require('@src/images/payout/TOLL.png')},
  {
    id: 'MAINTENANCE',
    name: '保养',
    icon: require('@src/images/payout/MAINTENANCE.png'),
  },
  {id: 'REPAIR', name: '维修', icon: require('@src/images/payout/REPAIR.png')},
  {
    id: 'VIOLATION',
    name: '违章',
    icon: require('@src/images/payout/VIOLATION.png'),
  },
  {
    id: 'ACCESSORIES',
    name: '饰品配件',
    icon: require('@src/images/payout/ACCESSORIES.png'),
  },
  {
    id: 'CAR_LOAN',
    name: '车贷',
    icon: require('@src/images/payout/CAR_LOAN.png'),
  },
  {
    id: 'INSURANCE',
    name: '保险',
    icon: require('@src/images/payout/INSURANCE.png'),
  },
  {id: 'OTHERS', name: '其他', icon: require('@src/images/payout/OTHERS.png')},
];

export {PayoutReasons};
