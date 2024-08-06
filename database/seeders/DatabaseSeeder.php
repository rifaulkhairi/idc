<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $users = [
            ['name' => 'Rifa Ulkhairi', 'email' => 'rifa@gmail.com', 'username' => 'rifa@gmail.com', 'role' => 'admin'],
            ['name' => 'Aiyub', 'email' => 'aiyub@gmail.com', 'username' => 'aiyub@gmail.com', 'role' => 'admin'],
            ['name' => 'Haris', 'email' => 'haris@gmail.com', 'username' => 'haris@gmail.com', 'role' => 'supervisor'],
            ['name' => 'Jufprisal', 'email' => 'jufprisal@gmail.com', 'username' => 'jufprisal@gmail.com', 'role' => 'supervisor'],
            ['name' => 'Rijal', 'email' => 'rijal@gmail.com', 'username' => 'rijal@gmail.com', 'role' => 'user'],
            ['name' => 'Riski', 'email' => 'riski@gmail.com', 'username' => 'riski@gmail.com', 'role' => 'user'],

        ];

        foreach ($users as $user) {
            User::factory()->create($user);
        }
    }
}
