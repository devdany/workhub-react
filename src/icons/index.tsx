import { faBell, faCheckCircle, faCircle, faEllipsisH, faEnvelope, faHome, faLaptopCode, faSearch, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x'
  color?: string
}
export const SearchIcon = (props: Props) => <FontAwesomeIcon icon={faSearch} size={props.size} color={props.color} />
export const GoogleIcon = (props: Props) => <FontAwesomeIcon icon={faGoogle} size={props.size} color={props.color}/>
export const FacebookIcon = (props: Props) => <FontAwesomeIcon icon={faFacebook} size={props.size} color={props.color}/>
export const GithubIcon = (props: Props) => <FontAwesomeIcon icon={faGithub} size={props.size} color={props.color}/>

export const HomeIcon = (props: Props) => <FontAwesomeIcon icon={faHome} size={props.size} color={props.color}/>
export const FollowIcon = (props: Props) => <FontAwesomeIcon icon={faUserFriends} size={props.size} color={props.color}/>
export const ProjectIcon = (props: Props) => <FontAwesomeIcon icon={faLaptopCode} size={props.size} color={props.color}/>
export const TeamIcon = (props: Props) => <FontAwesomeIcon icon={faUsers} size={props.size} color={props.color}/>
export const NotificationIcon = (props: Props) => <FontAwesomeIcon icon={faBell} size={props.size} color={props.color}/>
export const MoreIcon = (props: Props) => <FontAwesomeIcon icon={faEllipsisH} size={props.size} color={props.color}/>
export const EmailIcon = (props: Props) => <FontAwesomeIcon icon={faEnvelope} size={props.size} color={props.color}/>
export const ConfirmedIcon = (props: Props) => <FontAwesomeIcon icon={faCheckCircle} size={props.size} color={props.color}/>
export const CircleIcon = (props: Props) => <FontAwesomeIcon icon={faCircle} size={props.size} color={props.color}/>