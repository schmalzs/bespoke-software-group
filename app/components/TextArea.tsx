import * as React from 'react';
import cx from 'classnames';

type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { hasError?: boolean };

export default function TextArea({
  className,
  hasError,
  ...rest
}: TextAreaProps) {
  const [hasFocused, setHasFocused] = React.useState(false);

  React.useEffect(() => {
    if (hasError) setHasFocused(false);
  }, [hasError]);

  return (
    <textarea
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
