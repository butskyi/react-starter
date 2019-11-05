import { FormComponentProps as FormProps } from 'antd/lib/form';

export { default as FormItem } from './FormItem';
export { default as FormScreen } from './FormScreen';

// TODO this can be replaced by simple re-export of `FormComponentProps` when `--isolatedModules` is removed from CRA
export type FormComponentProps<V = any> = FormProps<V>;
