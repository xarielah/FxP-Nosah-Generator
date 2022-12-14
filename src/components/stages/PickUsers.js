import {
    Switch,
    Input,
    Text,
    Container,
    Wrap,
    Divider,
    Flex,
    Box,
    Button,
} from '@chakra-ui/react';
import PreviewForum from './PreviewForum';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
const PickUsers = ({ setUser, setThread, inc, dec, forum }) => {
    const [wasThereAUser, setWasThereAUser] = useState(false);
    const [wasThereAThread, setWasThereAThread] = useState(false);
    const {
        control,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            user: '',
            userLink: '',
            thread: '',
            threadLink: '',
            threadUser: '',
        },
    });

    const onsubmit = (data) => {
        const { user, userLink, thread, threadLink, threadUser } = data;

        if (wasThereAUser) {
            setUser([user, userLink]);
        }
        if (wasThereAThread) {
            setThread([thread, threadLink, threadUser]);
        }
        inc();
    };
    const threadRegex =
        /^https:\/\/www\.fxp\.co\.il(\/(showthread\.php)?(\?.*)?)?$/;
    const userRegex = /^https:\/\/www\.fxp\.co\.il(\/(member\.php)?(\?.*)?)?$/;

    return (
        <Container>
            <PreviewForum forum={forum} />
            <form onSubmit={handleSubmit(onsubmit)}>
                <Box
                    bg={'#FAFAFA55'}
                    p={3}
                    borderRadius={'lg'}
                    border={'1px solid #fafafa22'}
                    fontWeight={'bold'}
                    color={'gray.800'}
                >
                    <Flex flexDirection='column' gap={6}>
                        <Wrap justify='space-between'>
                            <Text>האם היה משקיען השבוע?</Text>

                            <Switch
                                onChange={(e) => {
                                    setWasThereAUser(e.target.checked);
                                    resetField('user');
                                    resetField('userLink');
                                }}
                                defaultValue={wasThereAUser}
                            />
                        </Wrap>
                        {wasThereAUser && (
                            <>
                                <Wrap gap={4}>
                                    <Controller
                                        control={control}
                                        name='user'
                                        rules={{ required: wasThereAUser }}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                isInvalid={errors.user}
                                                placeholder='שם משתמש...'
                                                bg={'#fafafa'}
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name='userLink'
                                        rules={{
                                            pattern: userRegex,
                                            required: wasThereAUser,
                                        }}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                isInvalid={errors.userLink}
                                                placeholder='קישור למשתמש...'
                                                bg={'#fafafa'}
                                            />
                                        )}
                                    />
                                </Wrap>
                            </>
                        )}
                    </Flex>
                    <Divider my={4} />
                    <Flex flexDirection='column' gap={6}>
                        <Wrap justify='space-between'>
                            <Text>האם היה אשכול השבוע?</Text>
                            <Switch
                                isInvalid={errors.thread}
                                onChange={(e) => {
                                    setWasThereAThread(e.target.checked);
                                    resetField('thread');
                                    resetField('threadLink');
                                    resetField('threadUser');
                                }}
                            />
                            {errors.hasThread && (
                                <Text>יש בעיה בקישור לאשכול.</Text>
                            )}
                        </Wrap>
                        {wasThereAThread && (
                            <Wrap gap={4}>
                                <Controller
                                    control={control}
                                    name='thread'
                                    rules={{ required: wasThereAThread }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.thread}
                                            placeholder='שם האשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='threadLink'
                                    rules={{
                                        pattern: threadRegex,
                                        required: wasThereAThread,
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.threadLink}
                                            placeholder='קישור לאשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='threadUser'
                                    rules={{
                                        pattern: userRegex,
                                        required: wasThereAThread,
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.threadUser}
                                            placeholder='קישור למשתמש פותח האשכול...'
                                            bg={'#fafafa'}
                                        />
                                    )}
                                />
                            </Wrap>
                        )}
                    </Flex>
                </Box>
                <Wrap justify='center' mt={4}>
                    <Button
                        borderRadius={'full'}
                        onClick={dec}
                        size='sm'
                        colorScheme={'red'}
                    >
                        חזור אחורה
                    </Button>
                    <Button
                        borderRadius={'full'}
                        type='submit'
                        isDisabled={Object.keys(errors).length > 0}
                        size='sm'
                        colorScheme={'messenger'}
                    >
                        קבל קוד
                    </Button>
                </Wrap>
            </form>
        </Container>
    );
};

export default PickUsers;
