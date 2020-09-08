import { faBell, faEllipsisH, faHome, faLaptopCode, faSearch, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x'
}
export const SearchIcon = (props: Props) => <FontAwesomeIcon icon={faSearch} size={props.size}/>
export const GoogleIcon = (props: Props) => <FontAwesomeIcon icon={faGoogle} size={props.size}/>
export const FacebookIcon = (props: Props) => <FontAwesomeIcon icon={faFacebook} size={props.size}/>
export const GithubIcon = (props: Props) => <FontAwesomeIcon icon={faGithub} size={props.size}/>

export const HomeIcon = (props: Props) => <FontAwesomeIcon icon={faHome} size={props.size}/>
export const FollowIcon = (props: Props) => <FontAwesomeIcon icon={faUserFriends} size={props.size}/>
export const ProjectIcon = (props: Props) => <FontAwesomeIcon icon={faLaptopCode} size={props.size}/>
export const TeamIcon = (props: Props) => <FontAwesomeIcon icon={faUsers} size={props.size}/>
export const NotificationIcon = (props: Props) => <FontAwesomeIcon icon={faBell} size={props.size}/>
export const MoreIcon = (props: Props) => <FontAwesomeIcon icon={faEllipsisH} size={props.size}/>