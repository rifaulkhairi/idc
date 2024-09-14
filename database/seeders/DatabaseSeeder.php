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
            ['name' => 'Rifa Ulkhairi', 'email' => 'rifaulkhairi05@gmail.com', 'username' => 'rifaulkhairi05@gmail.com', 'role' => 'admin'],
            ['name' => 'Rifa Ulkhairi', 'email' => 'supervisor@gmail.com', 'username' => '200205002', 'role' => 'supervisor'],


        ];

        foreach ($users as $user) {
            User::factory()->create($user);
        }
    }
}
