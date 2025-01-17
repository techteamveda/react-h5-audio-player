import React, { PureComponent, ReactNode } from 'react';
import { TIME_FORMAT } from './constants';
interface CurrentTimeProps {
    audio?: HTMLAudioElement;
    defaultCurrentTime: ReactNode;
    isLeftTime: boolean;
    timeFormat: TIME_FORMAT;
}
interface CurrentTimeState {
    currentTime: ReactNode;
}
declare class CurrentTime extends PureComponent<CurrentTimeProps, CurrentTimeState> {
    audio?: HTMLAudioElement;
    hasAddedAudioEventListener: boolean;
    constructor(props: CurrentTimeProps);
    state: CurrentTimeState;
    handleAudioCurrentTimeChange: (e: Event) => void;
    addAudioEventListeners: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default CurrentTime;
