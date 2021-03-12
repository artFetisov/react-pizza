import React from 'react'
import classNames from 'classnames'
import { ButtonSvg } from './ButtonSvg'
import { useSelector } from 'react-redux'

export const HeaderButton = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart)

    return (
        <div className="header__cart">
            <button className={classNames('button', 'button--cart',)}>
                <span>{totalPrice} P</span>
                <div className="button__delimiter"></div>
                <ButtonSvg />
                <span>{totalCount}</span>
            </button>
        </div>
    )
}
