import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
    const fetcher = useFetcher();
    //loader를 트리거하지만 실제로 그 loader가 속한 페이지 또는 액션이 속한 페이지로 이동하지 않을때
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state]);

    return (
        <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;