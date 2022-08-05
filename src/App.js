import { Container, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { PickForum, PickUsers } from './components/stages';
import ShowCode from './components/stages/ShowCode';

function App() {
    const [forum, setForum] = useState('');
    const [weeklyUser, setWeeklyUser] = useState([]);
    const [weeklyThread, setWeeklyThread] = useState([]);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // if (forum && stage > 1) {
        //     setStage(1);
        // }
    }, [forum, stage]);

    const inc = () => stage < 2 && setStage((prev) => prev + 1);

    const setUser = (str) => setWeeklyUser(str);
    const setThread = (str) => setWeeklyThread(str);

    return (
        <Container>
            <Flex flexDirection='column' gap={10} my={5}>
                <PickForum
                    forum={forum}
                    inc={inc}
                    setter={(data) => setForum(data)}
                    stage={stage}
                />
                {stage === 1 && (
                    <PickUsers
                        inc={inc}
                        setUser={setUser}
                        setThread={setThread}
                    />
                )}
                {stage === 2 && (
                    <ShowCode
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
