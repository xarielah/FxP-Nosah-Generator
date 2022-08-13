import {
    Switch,
    Input,
    Text,
    Container,
    Wrap,
    Divider,
    Flex,
    Button,
} from '@chakra-ui/react';
import PreviewForum from './PreviewForum';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const PickUsers = ({ setUser, setThread, inc, dec, forum }) => {
    console.log(forum);
    const [wasThereAUser, setWasThereAUser] = useState(false);
    const [wasThereAThread, setWasThereAThread] = useState(false);
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            user: '',
            userLink: '',
            thread: '',
            threadLink: '',
        },
    });

    const onsubmit = (data) => {
        const { user, userLink, thread, threadLink } = data;
        console.log(data);
        if (wasThereAUser) {
            setUser([user, userLink]);
        }
        if (wasThereAThread) {
            setThread([thread, threadLink]);
        }
        inc();
    };
    const linkRegex =
        /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;

    return (
        <Container>
            <PreviewForum forum={forum} />
            <form onSubmit={handleSubmit(onsubmit)}>
                <Flex flexDirection='column' gap={6}>
                    <Wrap justify='space-between'>
                        <Text>האם היה משקיען השבוע?</Text>

                        <Switch
                            onChange={(e) => {
                                setWasThereAUser(e.target.checked);
                                reset();
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
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='userLink'
                                    rules={{
                                        pattern: linkRegex,
                                        required: wasThereAUser,
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            isInvalid={errors.userLink}
                                            placeholder='קישור למשתמש...'
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
                                reset();
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
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name='threadLink'
                                rules={{
                                    pattern: linkRegex,
                                    required: wasThereAThread,
                                }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        isInvalid={errors.threadLink}
                                        placeholder='קישור לאשכול...'
                                    />
                                )}
                            />
                        </Wrap>
                    )}
                    <Wrap justify='center'>
                        <Button onClick={dec} size='sm' colorScheme={'red'}>
                            חזור אחורה
                        </Button>
                        <Button
                            type='submit'
                            isDisabled={Object.keys(errors).length > 0}
                            size='sm'
                            colorScheme={'messenger'}
                        >
                            קבל קוד
                        </Button>
                    </Wrap>
                </Flex>
            </form>
        </Container>
    );
};

export default PickUsers;
