import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent, queryClient } from '../../util/http.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      //성공한 경우에만 이 함수가 실행이됩니다.

      // events와 같이 있는 모든 쿼리를 무효화하고 다시 
      // exact : true 는 정확히 events만 무효다 
      queryClient.invalidateQueries({ queryKey: ['events'] });
      // 쿼리를 무효화하는 함수 -> 데이터가 만료되었으니 다시 트리거해라

      navigate("/events");

    }
  })

  function handleSubmit(formData) {
    mutate({ event: formData });

  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && <ErrorBlock title="Failed to create event" message={error.info?.message || 'Failed to create event.try again'} />}
    </Modal>
  );
}
