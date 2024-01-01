import {ImageRequireSource} from 'react-native';
import { PayoutReason } from './Configs';

export interface Bill {
  id: string;
  customer?: string;
  ammount: number | string;
  reason: string;
  remark: string;
  distance: number | string;
  attachment?: string[];
  createTime: string;
  payTime: string;
}
