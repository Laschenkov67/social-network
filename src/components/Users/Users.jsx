import React, { Component } from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

const URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg'

export default class Users extends Component {
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages=[];

        for(let i=1; i<=pagesCount; i++){
            pages.push(i);
        }
        debugger
        return (
            <div>
                { /*<button onClick={this.getUsers}>Показать пользователей</button>*/}
                <div>
                    {pages.map(p=> {
                       return <span className={this.props.currentPage === p && s.selectedPage} onClick = {(e)=>{this.props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>                                
                                    <img src={u.photos.small != null ? u.photos.small : URL} className={s.usersPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={this.props.followingInProgress} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button disabled={this.props.followingInProgress} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}