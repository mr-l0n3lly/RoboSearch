import React from 'react';
import {Card} from '../card/Card';

import './CardList.css';

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.monsters.map(monster => (
                    <Card id={monster.id} name={monster.name} email={monster.email}/>
                ))
            }
        </div>
    );
}
