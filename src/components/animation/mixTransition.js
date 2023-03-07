import React, { useState } from 'react';
import './animation.css'
import Button from '../../components/UI/button/button'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const MixTransition = () => {
    const [items, setItems] = useState(
        [
            { 'id': 0 }
        ])
    const addItem = () => {
        const newItems = [...items]
        newItems.push({
            'id': items.length
        })
        setItems(newItems)
    }
    const deleteItem = (index) => {
        const Items = [...items]
        Items.splice(index, 1)
        setItems(Items)
    }

    return (
        <div style={{ display: 'flex', flexFlow: 'column', marginTop: '75px' }}>
            <Button btnType='danger' clicked={addItem}>
                Add ITEM
            </Button>
            <TransitionGroup>
                {
                    items.map((item) => (
                        <CSSTransition
                            timeout={500}
                            classNames="item"
                        >
                            <div className='box' key={item.id} onClick={() => deleteItem(item.id)}>
                                <h1>Item{item.id}</h1>
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div >
    )
}

export default MixTransition
