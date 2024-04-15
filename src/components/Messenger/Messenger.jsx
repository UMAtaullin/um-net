import React from "react";
import cls from './Messenger.module.css'

const Messenger = () => {
  return (
		<div className={cls.messenger_page}>
			<dev className={cls.dialogs}>
				<dev className={cls.dialogs_item}>Farit</dev>
				<dev className={cls.dialogs_item}>Zemfira</dev>
				<dev className={cls.dialogs_item}>Ilnur</dev>
				<dev className={cls.dialogs_item}>Mansur</dev>
				<dev className={cls.dialogs_item}>Raushania</dev>
			</dev>
			<dev className={cls.messages}>
				<dev className={cls.messages_item}>
					Excuse me, how do I get to the airport? Excuse me, how do I get to the
					airport?
				</dev>
				<dev className={cls.messages_item}>Cross th bridge.</dev>
				<dev className={cls.messages_item}>
					This is an affirmative sentence.
				</dev>
				<dev className={cls.messages_item}>You can also take the bus.</dev>
				<dev className={cls.messages_item}>
					Simply get out at the last stop.
				</dev>
			</dev>
		</div>
	)
}

export default Messenger
