"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bytesToGiB } from '@/lib/format';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from 'lucide-react';
import Link from "next/link";

interface Props {
  status: string;
  endDate: string;
  daysLeft: string;
  trafficUsed: number;
  isLoading: boolean;
}

function defineStatus(status: string ) {
  switch (status) {
    case 'ACTIVE': return <Badge variant='outline' className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Активна</Badge>
    case 'EXPIRED': return <Badge variant='destructive' className="bg-green-50 text-red-700 dark:bg-red-950 dark:text-red-300">Истекла</Badge>
  } 
}

export function SubscriptionCard({ status, endDate, daysLeft, trafficUsed, isLoading }: Props) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 shadow-xl rounded-2xl z-1">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white text-lg">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-white" />
            Текущая подписка
          </div>
          {defineStatus(status)}
        </CardTitle>
        <div className="text-zinc-400"> 
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <span className='text-zinc-400 text-1xl'>Действует до </span>
              {isLoading ? (
                <Skeleton className="h-5 w-24 rounded-md" />
              ) : (
                <>
                  <span className="text-white">{endDate}</span>
                </>
              )}
            </div>
            
            <div className='text-right'>
              <span className='text-zinc-400 text-1xl'>Истекает через</span>
              {isLoading ? (
                <Skeleton className="h-5 w-24 rounded-md" />
              ) : (
                <>
                  <p className="text-white font-bold">{daysLeft} дней</p>
                </>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className='flex justify-between items-start'>
          <span className='text-zinc-400 text-sm'>Использовано трафика</span>
          {isLoading ? (
            <Skeleton className="h-5 w-24 rounded-md" />
          ) : (
            <>
              <p className='font-bold'>{bytesToGiB(trafficUsed)} / <span className='font-mono'>∞</span> GB</p>
            </>
          )}
        </div>
        <div className='space-y-4'>
          <Progress value={0} />
          <div className="flex justify-between text-sm text-zinc-400">
            <span>Следующий платеж</span>
            <span>150<span className='font-mono font-bold'>₽</span> / месяц</span>
          </div>
          <Link href="tariffs">
            <Button variant="secondary" className="w-full text-white cursor-pointer rounded-xl bg-zinc-800 hover:bg-zinc-700">
              Сменить тариф
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}