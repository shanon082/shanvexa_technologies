"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export function Modal({
  id,
  label,
  trigger,
  className,
  children,
}: {
  id: string;
  label: string;
  trigger: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    const target = event.target;
    if (target instanceof Element && target.closest('a[href="#contact"]')) {
      dialog.current?.close();
      return;
    }
    if (target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      dialog.current?.close();
    }
  }
  return (
    <>
      <button
        type="button"
        className={className}
        aria-haspopup="dialog"
        aria-controls={id}
        onClick={() => dialog.current?.showModal()}
      >
        {trigger}
      </button>
      <dialog id={id} ref={dialog} aria-label={label} onClick={handleClick}>
        <button
          type="button"
          className="dialog-close"
          aria-label={`Close ${label}`}
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        {children}
      </dialog>
    </>
  );
}
