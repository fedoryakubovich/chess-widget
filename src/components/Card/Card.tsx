import React, { useCallback } from 'react';

import classNames from 'classnames';
import { HiChevronRight } from 'react-icons/hi';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import HomeBreadCrumb from './HomeBreadCrumb';
import Loader from '../../components/Loader';
import { LANGUAGE_OPTIONS } from '../../constants';
import { LOCALES } from '../../intl/constants';
import { ACTIONS } from '../../store/actions';
import { useAppState } from '../../store/context';
import { IBreadcrumb } from '../../types';
import Select from '../Select';

type CardProps = {
  children: React.ReactNode;
  breadcrumbs: IBreadcrumb[];
  isLoading?: boolean;
};

const Card: React.FC<CardProps> = ({ children, breadcrumbs, isLoading }) => {
  const navigate = useNavigate();
  const { dispatch } = useAppState();
  const { formatMessage } = useIntl();

  const handleOnChangeLanguage = useCallback(
    (locale: LOCALES) => {
      dispatch({ type: ACTIONS.setLocale, payload: { locale } });
    },
    [dispatch]
  );

  return (
    <section className="card">
      {isLoading && <Loader className="absolute h-full items-center" />}
      <nav className="cardNav" aria-label="Breadcrumb">
        <ol className="list">
          {breadcrumbs.map((breadcrumb) => {
            const itemClassName = classNames('navItem', {
              hover: breadcrumb.isHover,
            });

            return breadcrumb.isHome ? (
              <HomeBreadCrumb
                link={breadcrumb?.link}
                key={breadcrumb.id}
                isHover={Boolean(breadcrumb.isHover)}
                label={formatMessage({ id: breadcrumb.labelKey })}
              />
            ) : (
              <li key={breadcrumb.id}>
                <section className="navItemWrapper">
                  <HiChevronRight aria-hidden="true" className="chevronRight" />

                  <button
                    onClick={() => breadcrumb.link && navigate(breadcrumb.link)}
                    className={itemClassName}
                    tabIndex={breadcrumb.isHover ? 1 : -1}
                  >
                    {formatMessage({ id: breadcrumb.labelKey })}
                  </button>
                </section>
              </li>
            );
          })}
        </ol>

        <Select options={LANGUAGE_OPTIONS} onChange={handleOnChangeLanguage} />
      </nav>

      {!isLoading && <section className="content">{children}</section>}
    </section>
  );
};

export default React.memo(Card);
