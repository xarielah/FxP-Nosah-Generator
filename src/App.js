import { Container, Flex, Text, Progress } from '@chakra-ui/react';
import { useState } from 'react';
import { PickForum, PickUsers, ShowCode } from './components/stages';

function App() {
    const [forum, setForum] = useState('');
    const [weeklyUser, setWeeklyUser] = useState([]);
    const [weeklyThread, setWeeklyThread] = useState([]);
    const [stage, setStage] = useState(0);

    const inc = () => stage < 2 && setStage((prev) => prev + 1);
    const dec = () => setStage((stage) => stage - 1);

    const setUser = (str) => setWeeklyUser(str);
    const setThread = (str) => setWeeklyThread(str);

    return (
        <Container p={0}>
            <Text textAlign={'center'}>
                {stage !== 2 ? `שלב ${stage + 1}/3` : 'בהצלחה ותודה רבה ♥'}
            </Text>
            <Progress
                boxShadow={'0 0 5px #33333355'}
                borderRadius={'full'}
                value={stage * 50}
                size='xs'
                colorScheme='messenger'
            />
            <Flex flexDirection='column' gap={10} my={5}>
                {stage === 0 && (
                    <PickForum
                        forum={forum}
                        inc={inc}
                        setter={(data) => setForum(data)}
                        stage={stage}
                    />
                )}
                {stage === 1 && (
                    <PickUsers
                        forum={forum}
                        inc={inc}
                        dec={dec}
                        setUser={setUser}
                        setThread={setThread}
                    />
                )}
                {stage === 2 && (
                    <ShowCode
                        dec={dec}
                        forum={forum}
                        weeklyThread={weeklyThread}
                        weeklyUser={weeklyUser}
                    />
                )}
            </Flex>
        </Container>
    );
}

export default App;
