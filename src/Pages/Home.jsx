import React, { useCallback, useEffect } from 'react'
import { Categories } from '../components/Categories/Categories'
import { SortPopup } from '../components/Sorting/SortPopup'
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/reducers/filtersReducer'
import { fetchPizzas } from '../redux/reducers/pizzasReducer'
import { Preloader } from '../components/Preloader/Preloader'
import { addPizzaToCart } from '../redux/reducers/cartReducer'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

export const Home = () => {
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback((obj) => {
        dispatch(setSortBy(obj))
    }, [])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categoryNames}
                    onClickCategory={onSelectCategory}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map(obj => <PizzaBlock
                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        onClickAddPizza={handleAddPizzaToCart}
                        key={obj.id}
                        {...obj}
                    />)
                    : Array(10).fill(0).map((_, index) => <Preloader key={index} />)}
            </div>
        </div >
    )
}
