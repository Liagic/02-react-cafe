import type { Values } from '../../types/votes';
export default interface VoteStatsProps extends Values {
  totalVotes: number;
  positiveRate: number;
}
