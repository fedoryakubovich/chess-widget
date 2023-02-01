import { WebComponentProps } from './src/types';

declare module '*.css';
declare module '*.scss';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chess-widget': WebComponentProps;
    }
  }
}
