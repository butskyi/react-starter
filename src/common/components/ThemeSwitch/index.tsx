import { Switch, type SwitchProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { useIsDark } from 'app/theme';

const ThemeSwitch = (props: SwitchProps) => {
  const { t } = useTranslation();
  const [isDark, toggleIsDark] = useIsDark();

  return (
    <Switch
      checked={isDark}
      onChange={toggleIsDark}
      checkedChildren={<>{t('common:themeSwitch.dark')}</>}
      unCheckedChildren={<>{t('common:themeSwitch.light')}</>}
      {...props}
    />
  );
};

export default ThemeSwitch;
