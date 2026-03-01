"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { KeyRound } from 'lucide-react';
import { CopyButton, HandleCopyText } from "@/components/ui/copy-button";
import { useRef } from 'react';

interface Props {
  subscriptionKey: string;
  isLoading: boolean;
}

export function SubscriptionKeyCard({ subscriptionKey, isLoading }: Props) {
    const textToCopy = useRef<HTMLDivElement>(null)

    return (
        <Card className="bg-zinc-900 border-zinc-800 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex text-white items-center gap-2 text-lg">
              <KeyRound size={18} className="text-white" /> Ключ подключения
            </CardTitle>
            <CardDescription className="text-zinc-400">Перейдите по ссылке для получения инструкции, или же просто вставьте в приложение</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="h-[45px] flex items-center justify-between bg-zinc-800 p-3 rounded-xl text-xs font-mono">
              {isLoading ? (
                <Skeleton className="h-4 w-full max-w-[150px] rounded-md" />
              ) : (
                <>
                  <span ref={textToCopy} className="text-white break-all flex-1 mr-2">
                    {subscriptionKey}
                  </span>
                  <CopyButton onClick={() => HandleCopyText(textToCopy)} />
                </>
              )}
            </div>
          </CardContent>
        </Card>
    )
}