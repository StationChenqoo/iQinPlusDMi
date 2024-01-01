import {ImageRequireSource} from 'react-native';

interface Bill {
  id: string;
  // income payout
  ammount: number;
  reason: string;
  remark: string;
  distance: string;
  attachment: string[];
  createTime: string;
  payTime: string;
}