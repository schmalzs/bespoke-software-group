import * as React from 'react';
import cx from 'classnames';

type TextBoxProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { hasError?: boolean };

export default function TextBox({
  className,
  hasError,
  ...rest
}: TextBoxProps) {
  const [hasFocused, setHasFocused] = React.useState(false);

  React.useEffect(() => {
    if (hasError) setHasFocused(false);
  }, [hasError]);

  return (
    <input
      className={cx(
        'border-[1px] border-gray outline-none p-2 rounded-lg focus:bg-super-light-react',
        {
          'bg-super-light-red': hasError && !hasFocused,
        },
        className
      )}
      onFocus={() => setHasFocused(true)}
      {...rest}
    />
  );
}
