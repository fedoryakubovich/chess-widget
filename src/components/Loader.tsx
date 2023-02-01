import React from 'react';

import classNames from 'classnames';
import { BiLoaderAlt } from 'react-icons/bi';
import { useIntl } from 'react-intl';

import { intlKeys } from '../intl';

type LoaderProps = {
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ className }) => {
  const { formatMessage } = useIntl();

  const loaderWrapperClassName = classNames('w-full flex justify-center', className);

  return (
    <div role="status" className={loaderWrapperClassName}>
      <BiLoaderAlt className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />

      <span className="sr-only">{formatMessage({ id: intlKeys.loading })}</span>
    </div>
  );
};

export default Loader;
