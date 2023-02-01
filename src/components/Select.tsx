import React, { ChangeEvent, useId } from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';

import { IOption } from '../types';

type SelectProps = {
  labelKey?: string;
  onChange?: (option: string) => void;
  className?: string;
  options: IOption[];
};

const Select: React.FC<SelectProps> = ({ labelKey, onChange, className, options }) => {
  const { formatMessage } = useIntl();
  const selectId = useId();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const wrapperClassNames = classNames('flex items-center gap-6', className);

  return (
    <section className={wrapperClassNames}>
      {labelKey && (
        <label htmlFor={selectId} className="text-lg font-medium text-gray-900 dark:text-white">
          {formatMessage({ id: labelKey })}
        </label>
      )}

      <select
        id={selectId}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((title) => {
          return (
            <option key={title.key} value={title.key}>
              {formatMessage({ id: title.labelKey })}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default React.memo(Select);
