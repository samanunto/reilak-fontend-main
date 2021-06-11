import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { eventsSetActive, eventsClearActiveEvent, eventsStartLoading } from '../../actions/eventos';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvents } = useSelector(state => state.events);
    const { uid } = useSelector(state => state.auth);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {

        dispatch(eventsStartLoading());

    }, [dispatch])


    const onDoubleClick = (e) => {
        // console.log(e);
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventsSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // console.log(e)
        dispatch(eventsClearActiveEvent());
    }


    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event);
        const style = {
            backgroundColor: (uid === event.usuario._id) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };

    return (
        <div className="main__home">
            <div className="row primera-row">
                <div className="calendar-screen">

                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        messages={messages}
                        eventPropGetter={eventStyleGetter}
                        onDoubleClickEvent={onDoubleClick}
                        onSelectEvent={onSelectEvent}
                        onView={onViewChange}
                        onSelectSlot={onSelectSlot}
                        selectable={true}
                        view={lastView}
                        components={{
                            event: CalendarEvent
                        }}
                    />



                    <AddNewFab className="addevent"/>


                    {
                        (activeEvents) && <DeleteEventFab />
                    }


                    <CalendarModal />



                </div>
            </div>

        </div>
    )
}

