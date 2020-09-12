import { FormDivider, FormInput, FormSubmit } from '../form'
import { Mutation, MutationEditProfileArgs } from '@src/types/graphql'
import React, { useEffect, useState } from 'react'
import { black, lightGray, main, postive } from '@theme/colors'
import { useMutation, useQuery } from '@apollo/client'

import { CircularProgress } from '@material-ui/core'
import { ConfirmedIcon } from '@src/icons'
import Dropzone from 'react-dropzone'
import { EDIT_PROFILE } from '@query/mutation'
import { LOGIN_USER } from '@cache/query/user'
import { SetLoginUser } from '@cache/model'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { userVar } from '@cache/dispatch'

type Props = {
  close: () => void
}
export default function SetUserInfo(props: Props) {
  const { data } = useQuery<SetLoginUser>(LOGIN_USER)
  const [editProfileReq] = useMutation<Mutation, MutationEditProfileArgs>(EDIT_PROFILE)

  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [headLine, setHeadLine] = useState('')
  const [profileImage, setProfileImage] = useState<null | string>(null)
  const [isEnterImage, setEnterImage] = useState(false)
  
  const handleChangeLastname = (e: any) => {
    setLastName(e.target.value)
  }

  const handleChangeFirstname = (e: any) => {
    setFirstName(e.target.value)
  }

  const handleChangeHeadline = (e: any) => {
    setHeadLine(e.target.value)
  }

  const handleDragEnter = () => {
    setEnterImage(true)
  }

  const handleDragLeave = () => {
    setEnterImage(false)
  }

  const handleSave = () => {
    if (data && data.loginUser) {
      editProfileReq({
        variables: {
          userId: data.loginUser.id,
          firstName: firstName,
          lastName: lastName,
          headLine: headLine,
          profileImg: profileImage
        }
      })
        .then((result) => {
          if (result.data) {
            const updatedUser = result.data.editProfile
            userVar(updatedUser)
            toast.success('Successfully saved!')
            console.log(updatedUser)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const onDropImage = (acceptedFile: File[]) => {
    const fileReader = new FileReader()
    const imageFile = acceptedFile[0]
    fileReader.readAsDataURL(imageFile)
    fileReader.onload = (e: any) => {
      setProfileImage(e.target.result)
      setEnterImage(false)
    }
  }

  useEffect(() => {
    if (data && data.loginUser) {
      if (data.loginUser.profileImg) {
        setProfileImage(data.loginUser.profileImg)
      }
      
      if (data.loginUser.firstName) {
        setFirstName(data.loginUser.firstName)
      }

      if (data.loginUser.lastName) {
        setLastName(data.loginUser.lastName)
      }

      if (data.loginUser.headLine) {
        setHeadLine(data.loginUser.headLine)
      }
    }
  }, [data])

  return (
    <Container>
      {data && data.loginUser ? (
        <>
          <Header>
            <HeaderText>Edit profile</HeaderText>
          </Header>
          <Body>
            <SubHeader>
              <SubHeaderText>Profile</SubHeaderText>
            </SubHeader>
            <ProfileBox>
              <Dropzone
                onDrop={onDropImage}
                multiple={false}
                accept={['image/*', 'application/pdf']}
                onDragLeave={handleDragLeave}
                onDragEnter={handleDragEnter}
              >
                {({ getRootProps, getInputProps }) => (
                  <ProfileImageBox isEnterImage={isEnterImage} {...getRootProps()}>
                    <>
                    {profileImage ? (
                      <ProfileImage src={profileImage}/>
                    ) : (
                      <ProfileNoImgge>{data?.loginUser.username.substring(0, 1).toUpperCase()}</ProfileNoImgge>
                    )}
                    <input {...getInputProps()}/>
                    </>
                  </ProfileImageBox>
                )}
              </Dropzone>
              
              <ProfileIntroBox>
                  <ProfileIntroName>
                    <NameBox>
                      <ContentHeader>Last Name</ContentHeader>
                      <FormInput styles={{ "margin-left": '15px', "margin-top": '10px', width: '160px' }} onChange={handleChangeLastname} value={lastName}/>
                    </NameBox>
                    <NameBox>
                      <ContentHeader>First Name</ContentHeader>
                      <FormInput styles={{ "margin-left": '15px', "margin-top": '10px', width: '160px' }} onChange={handleChangeFirstname} value={firstName}/>
                    </NameBox>
                  </ProfileIntroName>
                  <ProfileIntroHeadline>
                    <ContentHeader>Headline</ContentHeader>
                    <HeadlineTextare onChange={handleChangeHeadline} value={headLine} />
                  </ProfileIntroHeadline>
              </ProfileIntroBox>
            </ProfileBox>
            <FormDivider size={'90%'} margin={40} />
            <SubHeader>
              <SubHeaderText>Account Certification</SubHeaderText>
            </SubHeader>
            <CertificateBox>
              <ConfirmedIcon color={postive} size={'2x'} />
              <CertificatedText>Confirmed</CertificatedText>
            </CertificateBox>
            <FormDivider size={'90%'} margin={40} />
            <SubHeader>
              <SubHeaderText>Country / Region</SubHeaderText>
            </SubHeader>
            <SmallSubHeader>
            <SubHeaderText>Education</SubHeaderText>
            </SmallSubHeader>
          </Body>
          <Footer>
              <FormSubmit styles={{ width: '80px', "margin-right": '30px' }} title={'Save'} onClick={handleSave}/>
          </Footer>
        </>
      ): (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 760px;
  margin-left: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 800px;
  flex-basis: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background: #ffffff;
`

const Body = styled.div`
  width: 800px;
  margin-top: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Footer = styled.div`
  width: 800px;
  flex-basis: 80px; 
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background: #ffffff;
`

const HeaderText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${black};
`

const SubHeader = styled.div`
  width: 100%;
  flex-basis: 30px; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
`

const SmallSubHeader = styled.div`
  width: 100%;
  flex-basis: 30px; 
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
`

const SubHeaderText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${black};
`

const ProfileBox = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

const ProfileImageBox = styled.div<{ isEnterImage: boolean }>`
  display: flex;
  flex-basis: 250px;
  height: 250px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 125px;
  overflow: hidden;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: ${lightGray};
  ${(props) => props.isEnterImage ? 'border: 1px solid ' + main + '; opacity: 0.5;' : ''}
`

const ProfileImage = styled.img`
  width: 250px;
  height: auto;
`

const ProfileNoImgge = styled.span`
  font-weight: 400;
  font-size: 220px;
`

const ProfileIntroBox = styled.div`
  display: flex;
  flex-basis: 450px;
  height: 250px;
  margin-left: 20px;
  flex-direction: column;
`

const ProfileIntroName = styled.div`
  display: flex;
  width: 100%;
  height: 125px;
`

const NameBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ContentHeader = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${black};
  margin-left: 20px;
`

const ProfileIntroHeadline = styled.div`
  display: flex;
  width: 100%;
  height: 125px;
  flex-direction: column;
`

const HeadlineTextare = styled.textarea`
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 16px;
  height: 70px;
  margin-left: 15px;
  margin-top: 10px;
  width: 385px;
  resize: none;
`

const CertificateBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

const CertificatedText = styled.span`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 500;
`